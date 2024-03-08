import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function(props) {

        const { name, age, gender, profile, highlight } = {props.person.name, props.person.age, props.person.gender, props.person.profile, props.person.highlight};
        return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const App = function(props) {
    const anotherPerson = {
        name: 'Jane',
        age: 28,
        gender: 'female',
        profile: 'https://randomuser.me/api/portraits/women/75.jpg'
    }
    const { name, gender, ...rest } = anotherPerson
    console.log(rest) // { age: 28, profile: '...' }
    /*
    // https://wesbos.com/destructuring-renaming
    const { name, a: age, g: gender, p: profile } = {
        name: 'Joker',
        a: 40,
        g: 'Unknown',
        p: null
    }
    */

    return (
        <div id='props-basic'>
            {/* 실용 사례 */}
            <PersonProfile
                name='John'
                age={35}
                gender='male'
                profile='https://randomuser.me/api/portraits/men/75.jpg' />
            {/*
                그냥 prop 이름만 쓸 경우 true 값 전달
                <PersonProfile {...anotherPerson} highlight={true} />
            */}
            <PersonProfile {...anotherPerson} highlight />
            {/*
                여기서 age는 뒤의 ...rest에 의해서 overwrite 됨
                Q) 만약 age 순서를 뒤로 빼면?
            */}
            <PersonProfile name='Ken' gender='male' age={32} {...rest} />
        </div>
    )
}

root.render(
    <App />,
    <PersonProfileWithUserObject person={person}/>, document.getElementById("root")
) // 굳이 없어도 된다
import './User.css'
export default function User(props) {
    return (
        <>
            <p>Firstname: {props.firstName}</p>
            <p>Lastname: {props.lastName}</p>
        </>
    )
}
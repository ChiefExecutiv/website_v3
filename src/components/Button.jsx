export default function Button({ btn_Name , click_Event}) {
    return (
        <button onClick={click_Event}>
            {btn_Name}
        </button>
    )
}
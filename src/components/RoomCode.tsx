// Style
import "../styles/room-code.scss";

// Images
import copyImg from '../assets/images/copy.svg';

// Typescript
type RoomCodeProps = {
    code: string;
}


export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="copy room code" />
            </div>
            <span>{props.code}</span>
        </button>
    )
}
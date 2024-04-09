import './Finally.css'

function formatDate(date) {
    const dateObj = new Date(date);
    const currentDate = new Date();
    const difference = currentDate.getTime() - dateObj.getTime();
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
        return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }
}

export default function Messages({ message, own, burn, mediaLinks, onDelete }) {

    const showMessageHandler = () => {
        alert('' + message.body);
        if (!own && burn) {
            onDelete(message._id);
        }
    };

    return (
        <div className={own ? 'message own' : 'message'}>
            <div className={own ? 'messageTop own' : 'messageTop'}>
                {own || !burn ? (
                    <p className='messageText'>{message.body}</p>
                ) : (
                    <p className='messageText'>
                        <span onClick={showMessageHandler}>Read hidden message</span>
                    </p>
                )}
            </div>
            <div className="mediaLinkBox">
                {mediaLinks && mediaLinks.length > 0 && mediaLinks.map((link, index) => (
                    <div key={index} className="mediaLink">
                        <div className="mediaLinkPreview">
                            <img src={link} alt={`Media Preview ${index}`} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='messageBottom'>{formatDate(message.timeStamp)}</div>
        </div>
    );
}
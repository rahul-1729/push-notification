"use client"
import './button.css'

export default function Button() {
    const handleClick = async () => {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            new Notification('Button: Hey you, stop clicking me 😂', {
                body: 'You have a push notification',
                icon: '/logo.jpg',
            });
        } else {
            console.error('Notification permission denied');
        }
    }

    return (
        <button   onClick={handleClick}>
            Send Notification
        </button>
    );
}

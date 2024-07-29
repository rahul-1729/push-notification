"use client"
import styles from './button.module.css'

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
        <button
              style={{ fontFamily: "Sans-Serif" }}
              className="px-[1rem] py-[0.5rem] hover:bg-[#6434ce] hover:border-[#7f54e6] w-full md:w-[22rem] bg-[#1d103a] border-2 border-[#6434ce] rounded-xl transition-all duration-300 "
              onClick={() => handleClick()}
            >
              Send Notification
            </button>
    );
}

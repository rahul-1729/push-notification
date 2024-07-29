'use client'
// import Button from '@/components/Button';
export default function Home() {

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
    <div className='supercontainer'>
    <div className="container">
    <div className="nav"><h1>Hola!</h1></div>
    
    <div className="icon-container">
        <div className="borderCircle0">
          <div className="borderCircle1">
              <div className="borderCircle2">
                <div className="circle" id ="Circle">  
                    <div className="icon"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    <div className="error">
      <div>
          <div className="head">
          <h2>Lorem Ipsum...</h2>
          </div>
          <div className="para"> 
          <p>Lorem ipsum dolor sit amet.</p></div>
        </div>
        
 
 
    {/* <Button  /> */}

    <button  onClick={handleClick}>
            Send Notification
        </button>
    </div>
</div>
</div>
 
  );
}

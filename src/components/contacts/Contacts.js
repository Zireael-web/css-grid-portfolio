import './Contacts.scss'

import img from '../../img/main_photo.jpg'

import facebook from '../../icons/menu/facebook.svg'
import instagram from '../../icons/menu/instagram.svg'
import telegram from '../../icons/social/telegram.svg'

function Contacts() {
  return (
    <section className="contacts">
        <div className="container">
            <div className="contacts__wrapper">

                <div className="contacts__photo">
                    <img src={img} alt="my photoo"/>
                </div>

                <div className="contacts__description">
                    <h2 className="title title_16 contacts__title">Contacts</h2>
                    <div className="title contacts__subtitle">Don't hesitate to contact me!</div>
                    <div className="divider"></div>

                    <div className="title title_14 contacts__textme">You can text me in socials:</div>
                    <div className="contacts__social">
                        <a href="#" className="contacts__link facebook">
                            <img src={facebook} alt="facebook"/>
                        </a>
                        <a href="#" className="contacts__link">
                            <img src={telegram} alt="telegram"/>
                        </a>
                        <a href="#" className="contacts__link">
                            <img src={instagram} alt="instagram"/>
                        </a>
                    </div>
                    <div className="title title_14 contacts__fill">Or just leave your details so I can write to you myself</div>

                    <form action="#" className="contacts__form">
                        <div className="contacts__input">
                            <input required placeholder="Enter your name" name="name" id="name" type="text"/>
                            <label for="name">Your name</label>
                        </div>
                        <div className="contacts__input">
                            <input required placeholder="Enter your mail" name="mail" id="mail" type="email"/>
                            <label for="mail">Your mail</label>
                        </div>

                        <div className="contacts__textarea">
                            <textarea placeholder="Describe your projest" name="text" id="text"></textarea>
                            <label for="text">Your message</label>
                        </div>
                        <div className="btn_wrapper">
                            <button className="btn contacts__btn">Send application</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Contacts
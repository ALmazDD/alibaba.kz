import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a9mjtzd', 'template_sngza6r', form.current, 'hZoUoU1l3yNFZh6Qb').then(
      (result) => {
        console.log(result.text);
        alert('Ваше сообщение отправлено!');
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return ( 
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Приветствуем на</h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Alibaba.kz</h1>

        <p className="text-base md:text-lg lg:text-2xl mb-8">Alibaba.kz - домен продается!</p>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded">
          300 btc
        </div>

        <form ref={form} onSubmit={sendEmail} action="" method="post" id="revue-form" name="revue-form" target="_blank">
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder="Ваш email..."
              type="email"
              name="email"
              id="member_email"
              className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded outline-none mb-4 md:mb-0"
            />{' '}
          </div>
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder="Ваше сообщение..."
              type="text"
              name="message"
              id="member_email"
              className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded outline-none mb-4 md:mb-0"
            />
            <input
              type="submit"
              value="Отправить"
              name="member[subscribe]"
              id="member_submit"
              className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
            />
          </div>

          <div className="opacity-75 italic">Всегда рады вашим предложениям </div>
        </form>
      </main>

      <footer className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 md:text-xl lg:text-base">Разработано Clubbie.club</p>

          {/* <div className="flex -mx-6">
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              About us
            </a>{' '}
            |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              Privacy
            </a>{' '}
            |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              Contact
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;

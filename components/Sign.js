import React from 'react';
import { useForm } from 'react-hook-form';
import { signDeclaration } from "../arweaveFns";
import Modal from "react-modal";
import Button from "./core/Button";
import Box from "./core/Box";

Modal.setAppElement('#__next');
Modal.defaultStyles.overlay.backgroundColor = '#555555aa';

const customStyles = {
  content: {
    top: '10vh',
    left: '10vw',
    right: 'auto',
    bottom: 'auto',
    width: '80vw',
    height: '38vh',
    marginRight: '-50%',
    paddingBottom: '1.5rem',
    borderColor: '#e5e7eb',
    borderRadius: '0.75em',
    padding: '0',
    webkitFontSmoothing: 'subpixel-antialiased',
  },
};

export default function Sign({ txId, walletKey }) {
  const {
    register,
    handleSubmit,
  } = useForm();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (data) =>
    signDeclaration(txId, data.name, data.handle, walletKey)
      .then(data => console.log(data.data));

  return (<Box title="Sign the Declaration" content={
    <>
      <div className="my-6">
        <p className="font-mono">
          If you'd like to endorse this declaration, you can sign the declaration by clicking the button below. Signatures will become part of this document's permanent history on the Arweave blockchain.
        </p>
        <p className="text-gray-400 font-mono mt-2"> * Coming soon * </p>
        <Button
          primary
          onClick={/*openModal*/ () => {}}>
          Sign
        </Button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="sign-modal"
      >
          <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full font-body bg-gray-50 max-w-2xl">
          <div className="font-mono font-bold text-center py-3.5 bg-gray-100 text-gray-800 border-b border-gray-200">Sign the Declaration</div>
            <div className="pt-4 pb-2.5 px-5 bg-gray-50 max-h-20">
              <p className="font-mono text-center text-xl p-4 text-gray-800">
                <p className="pt-10"> Follow these steps to sign the declaration on-chain. </p>
                ---
                <p className="pt-10">
                  <ul>
                    <li>
                    1. Install the Arweave wallet extension
                      {" "}
                      <a className="underline" href="https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap" target="_blank">here.</a>
                      {" "}
                    </li>

                    <li>
                      2. Secure some AR from the <a className="underline" href="https://faucet.arweave.net/" target="_blank"> Arweave faucet. </a>
                    </li>

                    <li>
                      3. Verify with Twitter.
                    </li>

                    <li> 4. Sign below. </li>
                  </ul>
                  </p>
                </p>

              <div className="">
                <input className="focus:outline-none w-full border-b-2 px-4 py-4" type="text" {...register("name")} placeholder="Name / Alias" />
                <input className="focus:outline-none w-full border-b-2 px-4 py-4" type="text"{...register("handle")} placeholder="Twitter Handle"/>
              </div>

              <div className="mt-4 text-center">
               <Button className="mb-5 px-8 py-4 rounded-full bg-brown-20 text-white font-mono rounded-full"> Submit </Button>
              </div>

            </div>

            </form>
          </div>
      </Modal>
    </>} />
  );
}

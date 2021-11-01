
const cleanHandle = handle => {
  if (handle.length === 0) {
    return handle
  } else {
    const firstChar = handle[0]
    return firstChar === "@" ? handle.slice(1) : handle
  }
}

export default function Signatures({sigs}) {
  return <div className="mt-5 border rounded-lg">
    <h2 className="rounded-t font-mono py-2 bg-brown-80"> {sigs.length} Signature{sigs.length !== 1 && 's'}</h2>
    <div className="px-10">
      {sigs.map(sig => <div className="font-mono" key={sig.SIG_HANDLE}>
        
        <div className="flex border-b py-4 sm:space-x-0 md:space-x-0 lg:space-x-2 sm:py-1 md:py-4">
          <h3 className="py-2"><a href={`https://twitter.com/${sig.SIG_HANDLE}`}>{sig.SIG_NAME}</a></h3>
          <div className="flex-1"/>
          <a
            className="py-2 px-4 rounded-3xl text-brown-120 bg-gray-200 overflow-hidden lg:visible sm:invisible"
            href={`https://arweave.net/tx/${sig.SIG_ID}`}>TX: {sig.SIG_ID.slice(0, 6)}</a>
          <a
            className="py-2 px-4 rounded-3xl text-brown-120 bg-gray-200 overflow-hidden lg:visible sm:invisible"
            href={`https://viewblock.io/arweave/address/${sig.SIG_TX}`}> @{cleanHandle(sig.SIG_HANDLE)} </a>
          <a
            className="pr-8 rounded-4xl text-brown-120 overflow-hidden md:invisible lg:invisible xl:invisible sm:visible"
            href={`https://viewblock.io/arweave/address/${sig.SIG_TX}`}> @ </a>


        </div>
      </div>)}
    </div>
  </div>
}

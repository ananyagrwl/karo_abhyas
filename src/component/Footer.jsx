const Footer = () => (
    <div className=' flex flex-row justify-between bg-black pt-30 pr-5 pb-30 pl-20 flex-wrap align-middle w-full'>
        <div className=' flex flex-col text-white max-w-96 p-5'>
            <p >KARO ABHAYAAS</p>
            <p>112, ELECTRONIC CITY</p>
            <p>BANGALORE, INDIA</p>
        </div>
        <div className='flex flex-col text-white max-w-96 p-5'>
            <p >SOME TEXT ABOUT SOMETHING</p>
            <p>AND THEN SOME OTHER THING</p>
            <div className="flex flex-row justify-between">
            <button className=' bg-white text-black p-2 mt-8 mb-8'>CONTACT US</button>
            <button className='bg-white text-black p-2 mt-8 mb-8'>CONTACT US</button>
            </div>
        </div>
    </div>
)

export default Footer

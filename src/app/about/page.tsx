export default function Home() {
	return( 
	       <div className="flex min-h-screen flex-col items-left justify-left bg-zinc-50 font-sans dark:bg-black">
	         <main className="flex w-full max-w-xl flex-col items-left justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
	          <div className="flex flex-col items-left gap-6 text-center sm:items-start sm:text-left">
		    <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">About Us</h1>
		    <p>The Disorganisation Organisation is a small, personal website, used for whatever I want. Such things as a satirical news site, an email client-work in progress- and more to come will be hosted here. I pride myself on using my domain for my own personal joy, regardless of what society expects, so, you know what, just for you society, I will not use a full stop for this sentence, I will even end it with a comma,</p>
	            <p className="mt-8">We are independently run by Samuel, with some support from Samuel, to make and share necessary services for humanity. These services help people to move away from trillion dollar mega corporations and larger news channels.</p>
		  </div>
		 </main>
	       </div>
	 )
}	 

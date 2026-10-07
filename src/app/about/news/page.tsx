import Link from "next/link";

export default function Home() {
     return (
	     <div className="flex min-h-screen flex-col items-left justify-left bg-zinc-50 font-sans dark:bg-black">
	       <main className="flex w-full max-w-xl flex-col items-left justify-between bg-white px-16 py-32 dark:bg-black smitems-start">
	         <div className="flex flex-col items-left gap-6 text-center sm:items-start sm:text-left">
	           <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		    Disorganised News
	       	   </h1>
		   <p>The Disorganisation Organisation is excited to announce the disorganising of the Disorganised News! <br / > The Disorganised News is the newest satirical news channel- as of the time of release- with questionable credibility, up to date annoucements, and no bibliography. <br / > <br / > We aim to make posts weekly to ensure we have up-to-date articles at all times! We cover such things as politics, natural events, scientific discoveries, and more!</p>
		 </div>
	         <div className="flex flex-col gap-6 text-base font-medium sm:flex-row py-8">
	           <Link
		    href="/services/news"
		    className="flex h-12 w-full items-center justify-center gap-6 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
		  >
		   News
		   </Link>
	         </div>
	       </main>
	     </div>
     );
}

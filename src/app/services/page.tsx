import Link from "next/link";

function getTime(): number {
        return Math.floor(Date.now() / 1000);
}

const currentTime = getTime();
const timeLeft = 1956662114-currentTime;

export default function Home() {
	return (
	    <div className="flex min-h-screen flex-col items-left justify-left bg-zinc-50 font-sans dark:bg-black">
	      <main className="flex w-full max-w-xl flex-col items-left justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
	        <div className="flex flex-col items-left gap-6 text-center sm:items-start sm:text-left">

		 <h1 className="max-w-xs  text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		 Disorganised News 
		 </h1>

		 <p>We offer a satirical news channel for funnies. <br / > Everything here is completely true, packed with logical fallicies, unrelated facts, and whatever the far right is doing.</p>
                </div>
	        <div className="flex flex-col gap-3 text-base font-medium sm:flex-row py-4">
		 <Link 
		  href="/services/news"
		  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
		 >
		  News
		 </Link>
		</div>

		<div className="flex flex-col items-left gap-6 text-center sm:items-start sm:text-left">

		<h1 className="max-w-xs  text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		Disorganised Email Client
		</h1>

		<p>We are working on making an email client, expected to release within the next {timeLeft} seconds <br / > Our email service aims for simplicity, ease of use, and a feature rich system. </p>
                </div>
	       <div className="flex flex-col gap-3 text-base font-medium sm:flex-row py-4">
		<Link 
		 href="/services/email"
		 className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
		>
		 Email
		</Link>
		</div>

	      </main>
	    </div>
	 )
}

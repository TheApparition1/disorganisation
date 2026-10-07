import Link from "next/link";

export default function Home() {
	return(
		<div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
		  <main className="flex w-full max-w-xl flex-col justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
		    <div className="flex flex-col items-left gap-6 items-left justify-left text-center sm:items-start sm:text-left">
		      <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		        Disorganised News
		      </h1>
		      <p>
		        The greatest news site on the entirety of earth, according to me, myself, and I. <br / > <br / >         Bringing you the most up to date information on world events such as science, politics, economy, the traffic in the carpark nearest to me, and more!
<br / >                 All of this is available for free, you don't need to pay.
		      </p>
	              <p className="text-s">
	                I don't think I can even legally take payments.
	              </p>
		      <h2 className="max-w-xs text-xl leading-10 tracking-tight text-black dark:text-zinc-50">
		        So have yourself a laugh, a cry, and a generic emotional representation while you explore Disorganised News!
		      </h2>
		    </div>
		   <div className="flex flex-col items-left gap-6 items-right justify-between text-center sm:items-start sm:text-left">
		    <Link href="./news/articles" className="text-[#0000ff] flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-3 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[100px]">All articles</Link>
		   </div>
		  </main>
		</div>
	)
}

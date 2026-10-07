import Image from "next/image";

export default function Home() {
    return(
	<div className="flex min-h-screen flex-col items-left justify-center bg-zinc-50 font-sans dark:bg-black">
	 <main className="flex w-full max-w-2xl flex-col items-center justify-between bg-black px-16 py-2 dark:bg-black sm:items-start">
	  <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
	   <Image
	    src="/20261007politicalbanner.png"
	    height={400}
	    width={2000}
	    alt="image"
	   / >
	   <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
	    Neo-Babylonian Empire emerges victorius from the Battle of Carchemish
	   </h1>
	   <p>
	    Carchemish, the capital of the Neo-Assyrian empire, has been conquered by Nebuchadnezzar II, the son of the king of the Babylonian empire, in a battle of a specifc length, currently unconfirmed by our reporters. In this battle an alliance was made of the Babylonians and Medians lead by Nebuchadnezzar II, who attacked the city of Carchemish, defeated the Assyrians, who had assistance from the Egyptians lead by Necho II. 
		    <br / > <br / >
	    Nebuchadnezzar II lead the Babylonian army towards Carchemish, where they encountered the Egyptian army, who, reportedly, withdrew from combat. To prevent such dishonourable escape the Babylonian army caught, and defeated the remaining Egyptians in the Battle of Hamath.
		    <br / > <br / >
	    This battle give the Babylonians and Medians control over the city, which may provide great increases in trade access and probably bragging rights to the Babylonians and Medians.
		    <br / > <br / >
	    This likely caused such negative mental and physical health impacts within the egyptians and assyrians as death. The Babylonians and Medians received major increase in bragging rights, atleast a couple bucks, maybe a sword or something like that probably.
		    <br / > <br / > 
	    And that concludes our political report for 2026-10-07.
	   </p>
	  </div>
	 </main>
	</div>
    )
}

<script>
	import Button from '../portfolio/Button.svelte';
	import Header from '../portfolio/Header.svelte';
</script>

<div class="flex h-screen w-full items-center justify-center" id="about">
	<div class="flex h-[36rem] flex-col gap-10 px-4 lg:flex-row">
		<img src="/images/profile.svg" alt="Me" class="w-full max-w-[30rem]" />
		<div class="flex h-full w-full max-w-[30rem] flex-col justify-between gap-8">
			<div class="flex flex-col gap-2">
				<Header number="01.">About Me</Header>
				<p class="text-lg font-medium text-gray">
					Greetings, my name is
					<span class="text-red"> Jan Komínek </span>
					and I am a fullstack web developer with experience in SvelteKit, TailwindCSS, Typescript, and
					ExpressJS, currently
					<span class="text-red"> working at Precismo </span>
					and
					<span class="text-red"> Haxagon </span>
					. Working in a driven team is where I thrive, and I'm always eager to learn.
					<br />
					<br />
					I enjoy sports and spending time with my loved ones. Concurrently, I am
					<span class="text-red"> studying cyber security </span>
					at an industrial high school in Prague to enhance my skills in creating secure and reliable
					web applications.
					<br />
					<br />
					Let's connect and collaborate!
				</p>
			</div>
			<Button href="https://www.linkedin.com/in/jan-kominek">
				Learn more about me at LinkedIn
			</Button>
		</div>
	</div>
</div>

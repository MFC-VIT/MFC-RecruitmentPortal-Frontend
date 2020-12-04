<template>
	<div class="home-main">
		<button @click="apitest">Click me</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	methods: {
		apitest() {
			const email = 'avish.j@protonmail.com';
			const username = 'avishj';
			const phone_number = '7488259466';
			const password = 'thisisatest';
			this.$store
        .dispatch('register', email, username, phone_number, password)
        // eslint-disable-next-line no-unused-vars
				.then(success => {
					alert('Kaam karta hai tera API');
				})
				.catch(error => {
					alert(error);
				});
		}
	}
};
</script>

<style scoped></style>

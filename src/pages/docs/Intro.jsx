import Head from "../../components/Head";
const Intro = () => {
	return (
		<>
			<Head title={"Introduction"} />
			<section>
				<h1>Welcome to the docs</h1>

				<h2>Some things to remember</h2>
				<h3>Base URL</h3>
				<code>https://minasa-api.micahasowata.com</code>
				<p>
					over the course of this documentation it would referred to as{" "}
					<b>
						<i>base</i>
					</b>
				</p>
				<h3>Content Type</h3>
				<code>application/json</code>
				<h3>Authentication</h3>
				<code>JSON Web Tokens (JWT)</code>
			</section>
		</>
	);
};

export default Intro;

import React from "react";

import { Redirect } from "@reach/router";

const AboutPage = () => <Redirect from="/about" to="/" noThrow />;

export default AboutPage;

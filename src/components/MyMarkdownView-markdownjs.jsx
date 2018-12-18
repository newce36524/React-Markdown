import React from "react";
import { markdown } from 'markdown';

export default props=> (<div id="article" dangerouslySetInnerHTML={{ __html:markdown.toHTML(props.mdcontent) }} />);
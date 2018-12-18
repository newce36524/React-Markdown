import React from "react";
import marked from 'marked';

export default props=> (<div id="article" dangerouslySetInnerHTML={{ __html:marked(props.mdcontent, {breaks: true}) }} />);

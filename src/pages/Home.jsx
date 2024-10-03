import React, { useCallback, useState } from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import ReactCodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import Result from '../Components/Result';
import Header from '../layouts/Header';

const Home = () => {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJs = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
<html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
</html>
`;

  // State to manage editors' visibility
  const [isHtmlVisible, setHtmlVisible] = useState(false);
  const [isCssVisible, setCssVisible] = useState(false);
  const [isJsVisible, setJsVisible] = useState(false);

  // Toggle visibility functions
  const toggleHtml = () => setHtmlVisible(!isHtmlVisible);
  const toggleCss = () => setCssVisible(!isCssVisible);
  const toggleJs = () => setJsVisible(!isJsVisible);

  return (
    <>
      {/* <Layout>
       <Link to="/contact">Contact</Link>
    </Layout> */}

      {/* main content */}
      <Header />

      {/* ---------------------------------------NAVBAR---------------------------------------------- */}

      <div className="bg-gray-200 p-2 flex items-center justify-between shadow-md">
        {/* <!-- Left Section (File and Add Library) --> */}
        <div className="flex items-center space-x-4">
          {/* <!-- File Dropdown --> */}
          <div className="relative">
            <button className="text-gray-700 hover:underline">File ▼</button>
          </div>
          {/* <!-- Add Library --> */}
          <div>
            <button className="text-gray-700 hover:underline">Add library</button>
          </div>
        </div>

        {/* <!-- Middle Section (Tabs) --> */}
        <div className="flex space-x-2">
          <button
            className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
            onClick={toggleHtml}
          >
            HTML
          </button>
          <button
            className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
            onClick={toggleCss}
          >
            CSS
          </button>
          <button
            className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
            onClick={toggleJs}
          >
            JavaScript
          </button>
          <button className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
            Output
          </button>
        </div>

        {/* <!-- Right Section (Links) --> */}
        <div className="flex items-center space-x-4">
          {/* <!-- Login or Register Button --> */}
          <Link
            to="/Login"
            className="px-4 py-1 bg-yellow-300 rounded-md hover:bg-yellow-400"
          >
            Login or Register
          </Link>
          {/* <!-- Blog --> */}
          <a href="#" className="text-gray-700 hover:underline">
            Blog
          </a>
          {/* <!-- Help --> */}
          <a href="#" className="text-gray-700 hover:underline">
            Help
          </a>
        </div>
      </div>
      {/* ---------------------------------------NAVBAR---------------------------------------------- */}

      <div className="pt-2">
        {/* Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-auto">
          {/* HTML Editor */}
          {isHtmlVisible && (
            <div className="bg-[#f7f7f7] p-4 rounded-lg shadow h-72">
              <h2 className="text-lg font-semibold mb-2 text-black">HTML</h2>
              <ReactCodeMirror
                className="text-xl border-gray-700 border"
                value={html_edit}
                height="220px"
                theme="light"
                extensions={[html(true)]}
                onChange={onChangeHtml}
              />
            </div>
          )}

          {/* CSS Editor */}
          {isCssVisible && (
            <div className="bg-[#f7f7f7] p-4 rounded-lg shadow h-72">
              <h2 className="text-lg font-semibold mb-2 text-black">CSS</h2>
              <ReactCodeMirror
                className="text-xl border-gray-700 border"
                value={css_edit}
                height="220px"
                theme="light"
                extensions={[css(true)]}
                onChange={onChangeCss}
              />
            </div>
          )}

          {/* JavaScript Editor */}
          {isJsVisible && (
            <div className="bg-[#f7f7f7] p-4 rounded-lg shadow h-72">
              <h2 className="text-lg font-semibold mb-2 text-black">JavaScript</h2>
              <ReactCodeMirror
                className="text-xl border-gray-700 border"
                value={js_edit}
                height="220px"
                theme="light"
                extensions={[javascript(true)]}
                onChange={onChangeJs}
              />
            </div>
          )}
        </div>

        <Result srcCode={srcCode} />
      </div>
    </>
  );
};

export default Home;

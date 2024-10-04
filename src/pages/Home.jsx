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

  const onChangeHtml = useCallback((value) => setHtml_Edit(value), []);
  const onChangeCss = useCallback((value) => setCss_Edit(value), []);
  const onChangeJs = useCallback((value) => setJs_Edit(value), []);

  const srcCode = `
<html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
</html>`;

  const [isHtmlVisible, setHtmlVisible] = useState(false);
  const [isCssVisible, setCssVisible] = useState(false);
  const [isJsVisible, setJsVisible] = useState(false);

  const toggleHtml = () => setHtmlVisible(!isHtmlVisible);
  const toggleCss = () => setCssVisible(!isCssVisible);
  const toggleJs = () => setJsVisible(!isJsVisible);

  return (
    <>
      <Header />
      
      {/* Navbar */}
      <div className="bg-gray-200 p-2 flex flex-wrap items-center justify-between shadow-md">
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:underline">File ▼</button>
          <button className="text-gray-700 hover:underline">Add library</button>
        </div>

        {/* Responsive Tabs */}
        <div className="flex flex-wrap space-x-2 mt-2 md:mt-0">
          <button className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100" onClick={toggleHtml}>
            HTML
          </button>
          <button className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100" onClick={toggleCss}>
            CSS
          </button>
          <button className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100" onClick={toggleJs}>
            JavaScript
          </button>
          <button className="px-4 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
            Output
          </button>
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link to="/Login" className="px-4 py-1 bg-yellow-300 rounded-md hover:bg-yellow-400">
            Login or Register
          </Link>
          <a href="#" className="text-gray-700 hover:underline">Blog</a>
          <a href="#" className="text-gray-700 hover:underline">Help</a>
        </div>
      </div>

      {/* Editors */}
      <div className="pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isHtmlVisible && (
            <div className="bg-[#f7f7f7] p-4 rounded-lg shadow h-72">
              <h2 className="text-lg font-semibold mb-2">HTML</h2>
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

          {isCssVisible && (
            <div className="bg-[#f7f7f7] p-4 rounded-lg shadow h-72">
              <h2 className="text-lg font-semibold mb-2">CSS</h2>
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

          {isJsVisible && (
            <div className="bg-[#f7f7f7] p-4 rounded-lg shadow h-72">
              <h2 className="text-lg font-semibold mb-2">JavaScript</h2>
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

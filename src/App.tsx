import { MDXEditor, headingsPlugin, listsPlugin, ListsToggle, quotePlugin,thematicBreakPlugin, toolbarPlugin, UndoRedo, BoldItalicUnderlineToggles, } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

function App() {
  return <MDXEditor markdown="# Hello world" plugins={
    [
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      thematicBreakPlugin(),
      toolbarPlugin(
        {
          toolbarContents: () => (
            <>
              {' '}
              <UndoRedo />
              <ListsToggle/>
              <BoldItalicUnderlineToggles />
            </>
          )
        }
      )
    ]
  } />
}

export default App;

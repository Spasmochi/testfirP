import { RichText } from 'prismic-reactjs'
import prismicRichTextShare from 'shapes/prismic/richtext'

const RichTextComponent = ({ richtext }) => {
  return (
    <div>
      <RichText render={richtext} />
    </div>
  )
}

RichTextComponent.propTypes = {
  richtext: prismicRichTextShare,
}

export default RichTextComponent

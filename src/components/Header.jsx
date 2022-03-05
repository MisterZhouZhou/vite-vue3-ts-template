/**
  header JSX
 */
import { defineComponent } from 'vue';

const Header = defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => (
      <div>
        {props.text}
      </div>
    )
  }
});
export default Header;

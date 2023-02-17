import { colors, PRIMARY } from "@/utils/colors";

export default {
  props: {
    variant: {
      type: String,
      default: PRIMARY,
      validator(color) {
        return colors.includes(color);
      },
    },
  },
};

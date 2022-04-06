import { Typography } from '@mui/material';
export const MuiTypography = () => {
  // type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  return (
    <>
      <Typography variant='h3' margin='0px 0px 50px 0px'>TYPOGRAPHY</Typography>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading - component (h1) - gutterBottom (margin)</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>Sub title 1</Typography>
      <Typography variant='subtitle2'>Sub title 2</Typography>

      <Typography >(variant none = body1 by default) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, eos, necessitatibus. Consequatur cupiditate ex iure iusto magni nihil, officiis. Aspernatur eos harum similique! Atque illum odio quod repellat unde veniam.</Typography>
      <Typography variant='body1'>(body1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, eos, necessitatibus. Consequatur cupiditate ex iure iusto magni nihil, officiis. Aspernatur eos harum similique! Atque illum odio quod repellat unde veniam.</Typography>
      <Typography variant='body2'>(body1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, eos, necessitatibus. Consequatur cupiditate ex iure iusto magni nihil, officiis. Aspernatur eos harum similique! Atque illum odio quod repellat unde veniam.</Typography>
    </>
  );
}

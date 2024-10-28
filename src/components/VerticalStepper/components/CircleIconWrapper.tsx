import CircleIcon from '@mui/icons-material/Circle';

type CircleIconWrapperProps = {
  faded?: boolean;
  light?: boolean;
};

const CircleIconWrapper: React.FC<CircleIconWrapperProps> = ({
  faded,
  light,
}: CircleIconWrapperProps) => (
  <CircleIcon
    sx={{
      position: 'absolute',
      width: '32px',
      height: '32px',
      color: 'transparent',
      border: `2px solid ${faded ? 'var(--main-blue-faded)' : light ? 'var(--main-blue-light)' : 'var(--main-blue)'}`,
      borderRadius: '50%',
    }}
  />
);

export default CircleIconWrapper;

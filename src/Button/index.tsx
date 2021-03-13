import styled from 'styled-components';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color: 'blue' | 'red';
}

export default function index(props: ButtonProps) {
  return <Button {...props}>Submit</Button>;
}

const Button = styled.button.attrs({ type: 'button' })`
  display: inline-block;
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;

  background: ${({ color }) => color === 'blue' && '#00f'};
  background: ${({ color }) => color === 'red' && '#f00'};
`;

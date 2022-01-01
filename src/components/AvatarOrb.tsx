import styled from 'styled-components';

const AvatarOrb = styled.div`
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  border-radius: 100%;
  background: linear-gradient(134.17deg, #ff9900 0%, #fff627 86.27%);
`;

const XAvatarOrb = styled(AvatarOrb)`
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  width: 60px;
  min-width: 60px;
  max-width: 60px;
`;

export interface AvatarProps {
  address?: string;
  url?: string;
  style?: any;
}

const AvatarComponent: React.FC<AvatarProps> = (props) => {
  const getColours = (address: string) => {
    const hash = address.substring(2, 10);
    const r = parseInt(hash.substring(0, 2), 16);
    const g = parseInt(hash.substring(2, 4), 16);
    const b = parseInt(hash.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };
  if (props.url) {
    return (
      <div style={{ ...props.style }}>
        <AvatarOrb style={{ background: `url(${props.url})` }} />
      </div>
    )
  } else if (props.address) {
    return (
      <AvatarOrb
        style={{
          background: `linear-gradient(134.17deg, ${getColours(props.address.substring(2, 10))} 0%, ${getColours(
            props.address.substring(10, 18),
          )} 86.27%)`,
        }}
      />
    );
  } else {
    return <AvatarOrb />;
  }
};

export { AvatarComponent, AvatarOrb, XAvatarOrb };

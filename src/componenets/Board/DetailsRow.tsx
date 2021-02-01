import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import { Label } from './../../shared/styles';

interface IDetailsRowProps {
  label: string;
  value: number | string;
}

const DetailsRow: React.FC<IDetailsRowProps & IStyledComponent> = ({ className, label, value }) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <span>{value != null ? value : 'N/A'}</span>
    </div>
  );
};

export const StyledDetailsRow = styled(DetailsRow)`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  span {
    text-align: end;
  }
`;

export default StyledDetailsRow;

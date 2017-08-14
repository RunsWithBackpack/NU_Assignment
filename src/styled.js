import styled, {extend} from 'styled-components';

export const MyApp = styled.div`
  text-align: center;
  text-shadow: 0.5px 0.5px 0.75px #555555;
`



export const TitleHeader = styled.h1`
  font-size: 2.5rem;
  font-family: 'Roboto Slab', serif;
  background-color: rgba(221, 221, 170, .3);
`;

export const TaskForm  = styled.form`

`;

export const TaskInput  = styled.input`
  outline: none;
  background-color: #AABBCC;
  font-size: 1.25rem;
  width: 50%;
  text-shadow: 0.5px 0.5px 0.75px #555555;
`;

export const Hr = styled.hr`
  margin: 0;
`;

export const AddItemButton = styled.button`
  font-size: 1rem;
  position: relative;
  font-style: 'Roboto Slab', serif;
  background-color: rgba(221, 221, 170, .5)
`;
export const TasksWrapper = styled.div`
  width: 80%;
  position: center;
  margin: auto;
  background-color: rgba(221, 221, 170, .3);
  text-shadow: 0.3px 0.3px 0.5px #000000;
  box-shadow: 3px 3px 10px rgba(221, 221, 170, .3);
`;

export const MyItems = styled.h2`
  margin: 0;
  margin-top: 2%;
  padding: 1%;
  background-color: rgba(221, 221, 170, .3);
`;

export const HrLine = styled.hr`
  margin: 0;
`

export const TableHeaderWrapper = styled.div`
  min-width: 500px;
  margin: 0 auto;
  display: flex;
`;

////I realize this is very redundant - I figure there's a way to refer to "first-of-type", etc., but didn't yet find anything about it in the docs
export const TableHeaderColumn = styled.div.attrs({
  flexGrow: props => props.flexsize || 1,
  flexShrink: props => props.flexsize || 1
})`
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-basis: 0px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const TaskListItemEven = TableHeaderWrapper.extend`
  background-color: #AABBCC;
  margin-top: 1%;
  box-shadow: 3px 3px 5px #555555;
`;
// export const TaskListItemEven = styled.div`
  // background-color: #AABBCC;
  // margin-top: 1%;
  // box-shadow: 3px 3px 5px #555555;
//
//   min-width: 500px;
//   margin: 0 auto;
//   display: flex;
//   border: 2px solid red;
// `;
//
export const TaskListItemOdd = TaskListItemEven.extend`
  background-color: #CCCCCC;
`;

export const IndivTaskColumn = TableHeaderColumn.extend`
  font-size: 1rem;
  padding: 2px;
  padding-top: 5px;
`;

export const DeleteButton = styled.button`
  display: inline;
  background-color: #CC5555;
  height: auto;
`;

import { useContext } from 'react';
import { HiSearch } from 'react-icons/hi';
import { Input } from 'components/ui/input/input';
import { INCOMPLETE, SECONDARY } from 'constants/colors';
import { TodoCompleted } from 'components/todo-completed/todo-completed';
import { TodoContext } from 'context/context';
import {
  Header,
  HeaderContainer,
  StyledSearch,
  TotalTodos,
} from './todo-header.styles';

export const TodoHeader = () => {
  const { searchValue, setSearchValue, totalTodos, completedTodos } =
    useContext(TodoContext);

  const data = [
    { name: 'completed', value: completedTodos, color: SECONDARY },
    {
      name: 'uncompleted',
      value: totalTodos - completedTodos,
      color: INCOMPLETE,
    },
  ];
  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <HeaderContainer>
      <Header>
        <Search value={searchValue} onChange={onChange} />
        <TotalTodos>{totalTodos} TODOs</TotalTodos>
        <TodoCompleted
          percentageCompleted={((completedTodos / totalTodos) * 100).toFixed(0)}
          data={data}
        />
      </Header>
    </HeaderContainer>
  );
};

const Search = ({ onChange, value }) => (
  <StyledSearch>
    <Input value={value} onChange={onChange} type="search">
      <HiSearch size="1.4rem" />
    </Input>
  </StyledSearch>
);

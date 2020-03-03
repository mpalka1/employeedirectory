import React, { useState, useEffect } from 'react';
import employee from '../EmployeeList.json';
import Card from '../components/Card';
import ColumnWrapper from '../components/ColumnWrapper';
import Column from '../components/Column';
import SearchForm from '../components/Search';
import Button from '../components/Button';

function Directory() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      return;
    }
    setEmployees(employee);
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
    const filtered = employees.filter(employee => {
      return employee.name.toLowerCase().includes(search.toLowerCase());
    });
    setEmployees(filtered);
  };
  const sortAge = () => {
    const sorted = [...employees];
    sorted.sort((a, b) => a.age - b.age);
    setEmployees(sorted);
  };

  const sortSalary = () => {
    const sorted = [...employees];
    sorted.sort((a, b) => a.salary - b.salary);
    setEmployees(sorted);
  };
  console.log('employees state', employees);
  console.log('search state', search);

  return (
    <div className="container">
      <SearchForm handleInputChange={handleInputChange}></SearchForm>
      <Button
        onClick={() => {
          sortAge();
        }}
      >
        Sort by Age
      </Button>
      <Button
        onClick={() => {
          sortSalary();
        }}
      >
        Sort by Salary
      </Button>
      <ColumnWrapper>
        {employees.map(employee => (
          <Column key={employee.id}>
            <Card
              name={employee.name}
              salary={employee.salary}
              title={employee.title}
              age={employee.age}
              picture={employee.picture}
            />
          </Column>
        ))}
      </ColumnWrapper>
    </div>
  );
}

export default Directory;
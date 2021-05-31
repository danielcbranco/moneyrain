import { Container } from './style'
import { Summary } from '../Summary'
import React from 'react'
import { TransactionsTable } from '../TransactionsTable';



export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
import styled from "styled-components";

export const TaskContainer = styled.div`
  padding: 60px 85px;
  display: flex;
  flex-direction: column;
  max-width: 40%;
  padding-top: 50px;
  height: 100vh;
`;

export const TitleLastTasks = styled.h2`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const LastTasks = styled.div`
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const CompletedTasks = styled.div`
  flex: 1;
  padding-top: 28px;
`;

export const TaskList = styled.div`
  margin-top: 10px;
`;

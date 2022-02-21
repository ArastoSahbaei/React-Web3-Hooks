import styled from "styled-components"

export const Description = (props: { functionName: string, description: string }) => {
   return (
      <>
         <Title>{props.functionName}</Title>
         <DescriptionP>{props.description}</DescriptionP>
      </>
   )
}

const Title = styled.p`
   width: 100%;
   text-align: center;
   font-size: 2rem;
`

const DescriptionP = styled.p`
   width: 100%;
   text-align: center;
   font-size: 1.2rem;
`
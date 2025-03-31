import { Description, Homework09Container, ProfileCard, Title } from "./stylesLesson";

function Homework09AndLesson () {
    return (<Homework09Container>
        <ProfileCard vip>
            <Title>VIP Пользователь</Title>
            <Description>Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</Description>
        </ProfileCard>
        <ProfileCard>
        <Title>Обычный Пользователь</Title>
        <Description>Стандартный доступ, базовые функции и поддержка в порядке очереди.</Description>
        </ProfileCard>
    </Homework09Container>
    )
}

export default Homework09AndLesson;
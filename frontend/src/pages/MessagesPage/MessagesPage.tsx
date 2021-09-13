import React from "react";
import Section from "../../components/_StyledComponents/Section";
import styled from "styled-components";
import Avatar from "../../assets/images/avatar.jpg";
import Button from "../../components/_StyledComponents/Button";

import theme from "../../config/theme";

const MessagesView = styled.div`
	display: grid;
	grid-template-columns: auto 3fr;
	grid-template-rows: none;
	grid-gap: 0.5rem;
`;
const Conversations = styled.div`
	padding-right: 0.5rem;
	border-right: 1px solid rgba(0, 0, 0, 0.2);
	@media (max-width: 580px) {
		width: fit-content;
	}
`;
const ConversationView = styled.div`
	display: grid;
	align-items: center;
	border-radius: ${theme.defaultBorderRadius};
	grid-template-columns: auto auto;
	grid-template-rows: none;
	padding-right: 0.3rem;
	cursor: pointer;
	text-align: left;
	transition: all 0.2s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
	@media (max-width: 580px) {
		padding-right: 0;
		text-align: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}
`;

const MessageView = styled.div`
	display: grid;
	align-items: center;
	border: 1px solid #aaa;
	border-radius: 20px;
	margin: 0.5rem;
	background-color: lightgreen;
	padding: 0.5rem;
	line-height: 1.4;
	grid-template-rows: 3fr auto;
`;
const ReplyView = styled(MessageView)`
	background-color: lightblue;
`;
const ReplyContent = styled.div`
	display: grid;
	align-items: center;
	justify-content: flex-end;
`;

const activeConversations = [
	{ contact: "Gina Poopsalot" },
	{ contact: "Anna Westworld" },
	{ contact: "Bob Smith" },
	{ contact: "Frank Jaeger" },
	{ contact: "Shadow Moses" },
	{ contact: "Metal Gear" },
	{ contact: "Chi" },
];

const Conversation = ({ contact }: any) => {
	const shortName = contact.contact.split(" ");
	return (
		<ConversationView>
			<img
				style={{
					width: "50px",
					borderRadius: "500px",
					margin: "0.25rem",
					boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
				}}
				src={Avatar}
				alt="User Avatar"
			/>
			<div className="hide-sm">{contact.contact}</div>
			<div className="show-sm">{shortName[0]}</div>
		</ConversationView>
	);
};

const Message = () => {
	return (
		<MessageView>
			<div
				style={{
					alignItems: "center",
					display: "flex",
					lineHeight: 2,
					fontWeight: "bold",
				}}
			>
				<img
					style={{
						width: "50px",
						borderRadius: "500px",
						margin: "0.25rem",
						boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
					}}
					className="hide-lg"
					src={Avatar}
					alt="User Avatar"
				/>
				Me
			</div>
			<div>
				Cat ipsum dolor sit amet, et or nulla. Dolor. Accusantium quia aperiam
				cupidatat omnis eu but in. Ab irure so laborum or dolor and sequi duis
				but nostrum. Aliqua quam for amet aut for pariatur and minim. Voluptatem
				adipisicing dolores, but illum. Inventore velitesse so nostrud. Culpa
				cillum yet quis so nihil qui. Laboris. Sequi tempora. Illum laborum
				aliquip or aliquip, and sequi doloremque. Numquam voluptatem yet
				inventore, but adipisicing exercitation architecto veniam. Ipsam.
				Aliquid.
			</div>
			<div style={{ textAlign: "right", marginRight: "0.5rem" }}>
				Sent: 23:34
			</div>
		</MessageView>
	);
};

const Reply = () => {
	return (
		<ReplyView>
			<div
				style={{
					alignItems: "center",
					display: "flex",
					lineHeight: 2,
					fontWeight: "bold",
				}}
			>
				<img
					style={{
						width: "50px",
						borderRadius: "500px",
						margin: "0.25rem",
						boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
					}}
					className="hide-lg"
					src={Avatar}
					alt="User Avatar"
				/>
				Replyer
			</div>
			<ReplyContent>
				I write the best placeholder text, and I'm the biggest developer on the
				web by far... While that's mock-ups and this is politics, are they
				really so different? The concept of Lorem Ipsum was created by and for
				the Chinese in order to make U.S. design jobs non-competitive. Be
				careful, or I will spill the beans on your placeholder text. Lorem Ipsum
				better hope that there are no "tapes" of our conversations before he
				starts leaking to the press! He’s not a word hero. He’s a word hero
				because he was captured. I like text that wasn’t captured. When other
				websites give you text, they’re not sending the best. They’re not
				sending you, they’re sending words that have lots of problems and
				they’re bringing those problems with us. They’re bringing mistakes.
				They’re bringing misspellings. They’re typists… And some, I assume, are
				good words. I think the only card she has is the Lorem card.
			</ReplyContent>
			<div style={{ textAlign: "right", marginRight: "0.5rem" }}>
				Sent: 23:36
			</div>
		</ReplyView>
	);
};

const InputView = styled.div`
	padding-top: 0.5rem;
	display: grid;
	grid-template-columns: 4fr 1fr;
`;

const InputBox = () => {
	return (
		<InputView>
			<input type="text" /> <Button style={{ width: "100%" }}>Send</Button>
		</InputView>
	);
};

const MessagesPage = () => {
	return (
		<Section title="Messaging">
			<MessagesView>
				<Conversations>
					{activeConversations.map((convo: any, i: any) => (
						<>
							<Conversation contact={convo} />

							<hr />
						</>
					))}
				</Conversations>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gridTemplateRows: "4fr auto",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
						}}
					>
						<Message />
						<Reply />
					</div>
					<InputBox />
				</div>
			</MessagesView>
		</Section>
	);
};

export default MessagesPage;

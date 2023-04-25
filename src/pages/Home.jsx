import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { identiconSvg } from 'https://cdn.jsdelivr.net/npm/minidenticons@3.1.2/minidenticons.min.js'
import listJson from '../dummy/list.json';

const useStyles = makeStyles({
    container: {
        marginTop: '2rem',
    },
    title: {
        marginBottom: '1rem',
    },
    listItem: {
        marginBottom: '1rem',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
});

const Home = () => {
    const [questions, setQuestions] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = listJson;
                setQuestions(response.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <Container className={classes.container}>
            <Typography variant="h4" className={classes.title}>질문 목록</Typography>
            <List>
                {questions.map((question, idx) => (
                    <ListItem key={question.question_id} className={classes.listItem} component="a" href={`/questions/${idx}`} alignItems="flex-start">
                        <ListItemAvatar>
                            <identicon-svg username={question.owner.display_name}></identicon-svg>
                        </ListItemAvatar>
                        <ListItemText primary={question.title} secondary={`작성자: ${question.owner.display_name}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Home;

import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이준원",
        comment: "안녕하세요, 코곰입니다.",
    },
    {
        name: "김곰돌",
        comment: "리액트 재밌다~~",
    },
    {
        name: "김강민",
        comment: "프로틴 가져와~!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}></Comment>
                );
            })}
        </div>
    );
}

export default CommentList;
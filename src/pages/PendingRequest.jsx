import { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import Sidbar from '../compnents/Sidbar';
import Navbar from '../compnents/Navbar';


import { LuMenuSquare } from "react-icons/lu";
import { SiMicrosoftexcel } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import { useTheme, useMediaQuery } from '@mui/material'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
const PendingRequest = () => {
    const { dark } = useContext(DarkModeContext);
    const navigate=useNavigate()
    const [open, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [addIsHovered , setAddIsHovered] = useState(false);
    const [approvals, setApprovals] = useState({})
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const data = [
       {
        "id":2,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
        },
       {
        "id":2,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
        },
       {
        "id":2,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
        },
       {
        "id":2,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
        },
        {
        "id":3,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
    },{
        "id":4,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
    },{
        "id":5,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
    },{
        "id":7,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1
            },
            {
                "name": "Item 1",
                "quantity": 2
            },
            {
                "name": "Item 2",
                "quantity": 3
            },
            {
                "name": "Item 3",
                "quantity": 4
            },
            {
                "name": "Item 4",
                "quantity": 5
            }
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": 11,
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Pending",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": 10,
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Pending",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": 9,
                "stage": null
            },
            {
                "id": 7,
                "created_at": "2024-11-11T15:23:42.144205Z",
                "updated_at": "2024-11-11T15:23:42.144205Z",
                "status": "Pending",
                "comment": "Comment for log 6",
                "procurment_request": 1,
                "reciever": 8,
                "stage": null
            },
            {
                "id": 6,
                "created_at": "2024-11-11T15:23:42.005068Z",
                "updated_at": "2024-11-11T15:23:42.005068Z",
                "status": "Pending",
                "comment": "Comment for log 5",
                "procurment_request": 1,
                "reciever": 7,
                "stage": null
            },
            {
                "id": 5,
                "created_at": "2024-11-11T15:23:41.866374Z",
                "updated_at": "2024-11-11T15:23:41.866374Z",
                "status": "Pending",
                "comment": "Comment for log 4",
                "procurment_request": 1,

"reciever": 6,
                "stage": null
            },
            {
                "id": 4,
                "created_at": "2024-11-11T15:23:41.738290Z",
                "updated_at": "2024-11-11T15:23:41.738290Z",
                "status": "Pending",
                "comment": "Comment for log 3",
                "procurment_request": 1,
                "reciever": 5,
                "stage": null
            },
            {
                "id": 3,
                "created_at": "2024-11-11T15:23:41.565696Z",
                "updated_at": "2024-11-11T15:23:41.565696Z",
                "status": "Pending",
                "comment": "Comment for log 2",
                "procurment_request": 1,
                "reciever": 4,
                "stage": null
            },
            {
                "id": 2,
                "created_at": "2024-11-11T15:23:41.411522Z",
                "updated_at": "2024-11-11T15:23:41.411522Z",
                "status": "Pending",
                "comment": "Comment for log 1",
                "procurment_request": 1,
                "reciever": 3,
                "stage": null
            },
            {
                "id": 1,
                "created_at": "2024-11-11T15:23:41.282354Z",
                "updated_at": "2024-11-11T15:23:41.282354Z",
                "status": "Pending",
                "comment": "Comment for log 0",
                "procurment_request": 1,
                "reciever": 2,
                "stage": null
            }
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
    }]

    const showApprovals = (id)=> {
        setOpen(true)
        const approve = data.filter(item => { return item.id === id; })
        console.log(approve[0].request_history)
        setApprovals(approve[0].request_history)
}
    return (
       <div className="relative w-full h-screen">
            {/* Background Image or  Overlay */}
            {dark ? (<>
                 <div className="fixed top-0 left-0 w-full h-full bg-[#262846]  z-0"></div>
                {open?<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>:null}
                </>
            ) : (
                    <>
                <div className="fixed top-0 left-0 w-full h-full bg-gray-200  z-0"></div>
                        {open?<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>:null}
                    </>
            )}
            
            {/* Main Content */}
            <div className="relative  w-full h-full flex items-center justify-center mb-32    ">
                <Sidbar />
                <Navbar />
                {open?<div className={`w-full h-full absolute flex items-center justify-center z-50`}>
                    <div className={`w-2/5 ${dark?"bg-text-primary text-white":"bg-[#EFF6FE]"}  rounded-2xl flex flex-col justify-center items-center p-4`}>
                            {approvals.map((item) => {  return <div className='flex justify-center gap-24 items-center w-full border-b-2'>
                            <h3 className='text-md font-medium'>{item.reciever}</h3>
                            <h3 className='text-sm font-medium text-primary'> {new Date(item.created_at).toISOString().split('T')[0]}</h3>
                            <h3 className='text-md font-medium text-primary'>{item.status}</h3>
                        </div> })}
                          <button className='rounded-2xl bg-secondairy text-text-primary px-8 py-1 mt-1' onClick={()=>{setOpen(false)}}>Back</button>
                    </div>
                  
                </div>:null}
                
                <div className={`w-full md:w-5/6 md:ml-64 ml-32 h-full mt-28 ${dark ? "text-white" : "text-primary font-semibold"} px-8 `}>
                    <div className='w-full flex justify-between items-center pr-8 my-2'>
                        <div className="relative">
                            {/* Conditionally render the "Generate Report" div */}
                            {isHovered && (
                                <div
                                className={`absolute -top-1 left-9 w-[135px] h-[35px] rounded-2xl ${
                                    dark ? "bg-text-primary text-white" : "bg-white"
                                } p-2`}
                                >
                                Generate Report
                                </div>
                            )}

                            {/* The Excel icon with hover events */}
                            <SiMicrosoftexcel
                                className="text-3xl text-green-500 cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                            </div>
                        <div className="relative">
                            {/* Conditionally render the "Generate Report" div */}
                            {addIsHovered && (
                                <div
                                className={`absolute -top-1 right-9 w-[135px] h-[35px] rounded-2xl ${
                                    dark ? "bg-text-primary text-white" : "bg-white"
                                } p-2`}
                                >
                                Add Request
                                </div>
                            )}

                            {/* The Excel icon with hover events */}
                            <MdAssignmentAdd
                                className="text-3xl text-primary cursor-pointer"
                                onMouseEnter={() => setAddIsHovered(true)}
                                onMouseLeave={() => setAddIsHovered(false)}
                            />
                            </div>
                    </div>
                    <div className={`rounded-2xl overflow-hidden mr-8 p-2 ${dark ? "bg-card-dark shadow-md shadow-background-dark border border-gray-700" : "bg-white shadow-xl shadow-secondairy"}`}>
                        <div className="shadow-none rounded-2xl overflow-x-auto w-full">
                        {isMobile ? (
                            data.map((row) => (
                                <div
                                onClick={()=>{navigate(`/action-request/${row.id}`)}}
                                key={row.id}
                                className={`mb-4 p-4 rounded-lg transition-colors duration-300 ${
                                dark ? " text-white" : "bg-white text-gray-800"
                                } cursor-pointer hover:${
                                dark ? "" : "bg-gray-100"
                                }`}
                            >
                                <div><strong>ID:</strong> {row.id}</div>
                                <div><strong>Requestor Name:</strong> {row.requesterName}</div>
                                <div><strong>Items:</strong> {row.items.map((item) => item.name).join(", ")}</div>
                                <div><strong>Status:</strong> {row.status}</div>
                                <div><strong>Date:</strong> {new Date(row.created_at).toISOString().split("T")[0]}</div>
                                <div>
                                <strong>Approvals:</strong>
                                <LuMenuSquare
                                    onClick={() => showApprovals(row.id)}
                                    className="text-xl ml-2 text-primary cursor-pointer"
                                />
                                </div>
                            </div>
                            ))
                        ) : (
                            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase   ">
                                <tr>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3 text-center">Requestor Name</th>
                                <th className="px-6 py-3 text-center">Items</th>
                                <th className="px-6 py-3 text-right">Status</th>
                                <th className="px-6 py-3 text-center">Date</th>
                                <th className="px-6 py-3 text-center">Approvals</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                   
                                    <tr
                                        onClick={()=>{navigate(`/action-request/${row.id}`)}}
                                    key={row.id}
                                    className={`cursor-pointer ${
                                    dark
                                        ? " text-white hover:bg-gray-700"
                                        : "bg-white text-gray-800 hover:bg-gray-100"
                                    }`}
                                >
                                    <td className="px-6 py-4"> {row.id}</td>
                                    <td className="px-6 py-4 text-center">{row.requesterName}</td>
                                    <td className="px-6 py-4 text-center">{row.items.map((item) => item.name).join(", ")}</td>
                                    <td className="px-6 py-4 text-right">{row.status}</td>
                                        <td className="px-6 py-4 text-center">
                                            
                                    {new Date(row.created_at).toISOString().split("T")[0]}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                    <LuMenuSquare
                                        onClick={() => showApprovals(row.id)}
                                        className="text-xl ml-6 text-primary cursor-pointer"
                                    />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
  )}
                        </div>

                    </div>
                    <div className='flex items-center justify-center gap-2 mt-4'>
                            <FaArrowLeft className='text-xl text-secondairy' />
                            <span className='p-1 rounded-full bg-primary'><h1 className={`text-lg px-2 ${dark?"text-white":"text-white"}  `}>1</h1></span>
                            < FaArrowRight  className='text-xl '/>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PendingRequest;
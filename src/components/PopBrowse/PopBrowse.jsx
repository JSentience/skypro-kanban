import { useEffect, useState } from 'react';
import {
  BtnBrowseClose,
  BtnBrowseDelete,
  BtnBrowseEdit,
  BtnEditCancel,
  BtnEditClose,
  BtnEditDelete,
  BtnEditSave,
  BtnGroup,
  CategoriesTheme,
  CategoriesThemeP,
  CategoriesThemes,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseMain,
  PopBrowseTitle,
  PopBrowseTopBlock,
  PopBrowseWrap,
  Status,
  StatusP,
  StatusTheme,
  StatusThemeP,
  StatusThemes,
  Subttl,
} from './PopBrowse.styled.js';
import Calendar from '../Calendar/Calendar';
import { fetchTaskById } from '../../services/api';
import { useTasks } from '../../context/TaskContext';

const PopBrowse = ({ onClose, isActive, id }) => {
  const [task, setTask] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedTopic, setEditedTopic] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  const {
    tasks,
    updateTask: updateTaskContext,
    deleteTask: deleteTaskContext,
  } = useTasks();

  useEffect(() => {
    const loadTask = async () => {
      if (isDeleted) return;
      const localTask = tasks.find((t) => (t._id || t.id) === id);
      if (localTask) {
        setTask(localTask);
        setEditedTitle(localTask.title);
        setEditedDescription(localTask.description);
        setEditedTopic(localTask.topic);
        setEditedStatus(localTask.status);
      } else {
        const data = await fetchTaskById(id);
        setTask(data.task);
        setEditedTitle(data.task.title);
        setEditedDescription(data.task.description);
        setEditedTopic(data.task.topic);
        setEditedStatus(data.task.status);
      }
    };
    if (id && !isDeleted) {
      loadTask();
    }
  }, [id, tasks, isDeleted]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    if (!editedTitle.trim()) {
      alert('Название задачи не может быть пустым');
      return;
    }
    const updatedTask = {
      _id: id,
      title: editedTitle,
      description: editedDescription,
      topic: editedTopic,
      status: editedStatus,
    };
    await updateTaskContext(updatedTask);
    setTask((prev) => ({
      ...prev,
      title: editedTitle,
      description: editedDescription,
      topic: editedTopic,
      status: editedStatus,
    }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedTopic(task.topic);
    setEditedStatus(task.status);
    setEditMode(false);
  };

  const handleDelete = async () => {
    try {
      setIsDeleted(true);
      await deleteTaskContext(id);
      onClose();
    } catch {
      setIsDeleted(false);
    }
  };

  const themeColors = {
    'Web Design': { bg: '#ffe4c2', text: '#ff6d00' },
    Research: { bg: '#b4fdd1', text: '#06b16e' },
    Copywriting: { bg: '#e9d4ff', text: '#9a48f1' },
  };

  const currentThemeColors = themeColors[
    editMode ? editedTopic : task?.topic
  ] || { bg: '', text: '' };
  return (
    <PopBrowseMain $isActive={isActive}>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {editMode ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    border: '1px solid #d4dbe5',
                    padding: '5px',
                  }}
                  required
                />
              ) : (
                <PopBrowseTitle>
                  {task?.title || 'Название задачи'}
                </PopBrowseTitle>
              )}
              {editMode ? (
                <CategoriesThemes>
                  {Object.keys(themeColors).map((topic) => (
                    <CategoriesTheme
                      key={topic}
                      $isActive={editedTopic === topic}
                      $bgColor={themeColors[topic].bg}
                      $textColor={themeColors[topic].text}
                      onClick={() => setEditedTopic(topic)}
                    >
                      <CategoriesThemeP>{topic}</CategoriesThemeP>
                    </CategoriesTheme>
                  ))}
                </CategoriesThemes>
              ) : (
                <CategoriesTheme
                  $isActive={true}
                  $bgColor={currentThemeColors.bg}
                  $textColor={currentThemeColors.text}
                >
                  <CategoriesThemeP>{task?.topic}</CategoriesThemeP>
                </CategoriesTheme>
              )}
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusTheme
                  $isActive={
                    (editMode ? editedStatus : task?.status) === 'Без статуса'
                  }
                  $isHidden={false}
                  onClick={
                    editMode ? () => setEditedStatus('Без статуса') : undefined
                  }
                  style={{ cursor: editMode ? 'pointer' : 'default' }}
                >
                  <StatusThemeP>Без статуса</StatusThemeP>
                </StatusTheme>
                <StatusTheme
                  $isActive={
                    (editMode ? editedStatus : task?.status) === 'Нужно сделать'
                  }
                  $isGray={false}
                  onClick={
                    editMode
                      ? () => setEditedStatus('Нужно сделать')
                      : undefined
                  }
                  style={{ cursor: editMode ? 'pointer' : 'default' }}
                >
                  <StatusThemeP>Нужно сделать</StatusThemeP>
                </StatusTheme>
                <StatusTheme
                  $isActive={
                    (editMode ? editedStatus : task?.status) === 'В работе'
                  }
                  $isHidden={false}
                  onClick={
                    editMode ? () => setEditedStatus('В работе') : undefined
                  }
                  style={{ cursor: editMode ? 'pointer' : 'default' }}
                >
                  <StatusThemeP>В работе</StatusThemeP>
                </StatusTheme>
                <StatusTheme
                  $isActive={
                    (editMode ? editedStatus : task?.status) === 'Тестирование'
                  }
                  $isHidden={false}
                  onClick={
                    editMode ? () => setEditedStatus('Тестирование') : undefined
                  }
                  style={{ cursor: editMode ? 'pointer' : 'default' }}
                >
                  <StatusThemeP>Тестирование</StatusThemeP>
                </StatusTheme>
                <StatusTheme
                  $isActive={
                    (editMode ? editedStatus : task?.status) === 'Готово'
                  }
                  $isHidden={false}
                  onClick={
                    editMode ? () => setEditedStatus('Готово') : undefined
                  }
                  style={{ cursor: editMode ? 'pointer' : 'default' }}
                >
                  <StatusThemeP>Готово</StatusThemeP>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subttl>Описание задачи</Subttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={!editMode}
                    value={
                      editMode ? editedDescription : task?.description || ''
                    }
                    onChange={(e) => setEditedDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            {!editMode && (
              <PopBrowseBtnBrowse>
                <BtnGroup>
                  <BtnBrowseEdit onClick={handleEdit}>
                    <p>Редактировать задачу</p>
                  </BtnBrowseEdit>
                  <BtnBrowseDelete onClick={handleDelete}>
                    <p>Удалить задачу</p>
                  </BtnBrowseDelete>
                </BtnGroup>
                <BtnBrowseClose onClick={onClose}>Закрыть</BtnBrowseClose>
              </PopBrowseBtnBrowse>
            )}
            {editMode && (
              <PopBrowseBtnEdit $isEditMode={editMode}>
                <BtnGroup>
                  <BtnEditSave onClick={handleSave}>
                    <a>Сохранить</a>
                  </BtnEditSave>
                  <BtnEditCancel onClick={handleCancel}>
                    <a>Отменить</a>
                  </BtnEditCancel>
                  <BtnEditDelete onClick={handleDelete}>
                    <a>Удалить задачу</a>
                  </BtnEditDelete>
                </BtnGroup>
                <BtnEditClose onClick={onClose}>
                  <a href="#">Закрыть</a>
                </BtnEditClose>
              </PopBrowseBtnEdit>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseMain>
  );
};

export default PopBrowse;

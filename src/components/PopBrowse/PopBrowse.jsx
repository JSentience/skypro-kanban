import {useEffect, useState} from 'react';
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
import {deleteTask, fetchTaskById, updateTask} from '../../services/api';


const PopBrowse = ({onClose, isActive, id, theme}) => {
  const [task, setTask] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await fetchTaskById(id);
        setTask(data.task);
        setEditedTitle(data.task.title);
        setEditedDescription(data.task.description);
      } catch (err) {
        console.error('Error loading task:', err);
      }
    };
    if (id) {
      loadTask();
    }
  }, [id]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    if (!editedTitle.trim()) {
      alert('Название задачи не может быть пустым');
      return;
    }
    try {
      await updateTask(id, {
        title: editedTitle,
        description: editedDescription
      });
      setTask(prev => ({
        ...prev,
        title: editedTitle,
        description: editedDescription
      }));
      setEditMode(false);
      window.onTaskUpdated && window.onTaskUpdated();
    } catch (err) {
      console.error('Error saving task:', err);
    }
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditMode(false);
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      onClose();
      window.location.reload();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const themeColors = {
    'Web Design': {bg: '#ffe4c2', text: '#ff6d00'},
    Research: {bg: '#b4fdd1', text: '#06b16e'},
    Copywriting: {bg: '#e9d4ff', text: '#9a48f1'},
  };

  const currentThemeColors = themeColors[theme] || {bg: '', text: ''};
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
                    padding: '5px'
                  }}
                  required
                />
              ) : (
                <PopBrowseTitle>{task?.title || 'Название задачи'} № {id}</PopBrowseTitle>
              )}
              <CategoriesTheme $isActive={true} $bgColor={currentThemeColors.bg}
                               $textColor={currentThemeColors.text}>
                <CategoriesThemeP>{theme}</CategoriesThemeP>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusTheme $isActive={task?.status === 'Без статуса'}
                             $isHidden={false} onClick={async () => {
                  await updateTask(id, {
                    status: 'Без статуса',
                    title: task.title,
                    description: task.description
                  });
                  setTask(prev => ({...prev, status: 'Без статуса'}));
                  window.onTaskUpdated && window.onTaskUpdated();
                }}>
                  <StatusThemeP>Без статуса</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isActive={task?.status === 'Нужно сделать'}
                             $isGray={false} onClick={async () => {
                  await updateTask(id, {
                    status: 'Нужно сделать',
                    title: task.title,
                    description: task.description
                  });
                  setTask(prev => ({...prev, status: 'Нужно сделать'}));
                  window.onTaskUpdated && window.onTaskUpdated();
                }}>
                  <StatusThemeP>Нужно сделать</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isActive={task?.status === 'В работе'}
                             $isHidden={false} onClick={async () => {
                  await updateTask(id, {
                    status: 'В работе',
                    title: task.title,
                    description: task.description
                  });
                  setTask(prev => ({...prev, status: 'В работе'}));
                  window.onTaskUpdated && window.onTaskUpdated();
                }}>
                  <StatusThemeP>В работе</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isActive={task?.status === 'Тестирование'}
                             $isHidden={false} onClick={async () => {
                  await updateTask(id, {
                    status: 'Тестирование',
                    title: task.title,
                    description: task.description
                  });
                  setTask(prev => ({...prev, status: 'Тестирование'}));
                  window.onTaskUpdated && window.onTaskUpdated();
                }}>
                  <StatusThemeP>Тестирование</StatusThemeP>
                </StatusTheme>
                <StatusTheme $isActive={task?.status === 'Готово'}
                             $isHidden={false} onClick={async () => {
                  await updateTask(id, {
                    status: 'Готово',
                    title: task.title,
                    description: task.description
                  });
                  setTask(prev => ({...prev, status: 'Готово'}));
                  window.onTaskUpdated && window.onTaskUpdated();
                }}>
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
                    value={editMode ? editedDescription : (task?.description || '')}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar/>
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
                    <a href="#">Сохранить</a>
                  </BtnEditSave>
                  <BtnEditCancel onClick={handleCancel}>
                    <a href="#">Отменить</a>
                  </BtnEditCancel>
                  <BtnEditDelete onClick={handleDelete}>
                    <a href="#">Удалить задачу</a>
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

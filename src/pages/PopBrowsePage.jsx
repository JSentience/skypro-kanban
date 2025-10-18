import PopBrowse from '../components/PopBrowse/PopBrowse';

export const PopBrowsePage = ({ onClose, isActive, isEditMode }) => {
  return <PopBrowse onClose={onClose} isActive={isActive} isEditMode={isEditMode} />;
};

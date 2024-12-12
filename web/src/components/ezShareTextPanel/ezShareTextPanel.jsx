function EzShareTextPanel(props) {
    const { id, tabIndex } = props;

    return (
        <div hidden={ id !== tabIndex }>
            This is share text panel
        </div>
    );
}


export default EzShareTextPanel;
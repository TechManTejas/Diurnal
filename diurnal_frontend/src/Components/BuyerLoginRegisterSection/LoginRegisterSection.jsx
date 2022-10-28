import {Button, Label, Modal, TextInput} from 'flowbite-react'

function LoginRegisterSection({show, onClick, onClose}) {
    return (
        <>
            <Modal
                show={show}
                onClose={onClose}
            >
                <Modal.Header>
                    Buyer Login
                </Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your Mobile Number"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="tel"
                                placeholder="+91"
                                required={true}
                            />
                        </div>
                        <Button type='submit'>
                            Login
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginRegisterSection;
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react'

function LoginSection({ show, onClick, onClose }) {
    return (
        <>
            <Modal
                show={show}
                onClose={onClose}
            >
                <Modal.Header>
                    Vendor Login
                </Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="name@flowbite.com"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                                Remember me
                            </Label>
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

export default LoginSection;